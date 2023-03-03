import { useState, useRef } from 'react';
import Layout from '@/components/dashboard/Layout';
import { Pagination } from '@mui/material';
import 'reactjs-popup/dist/index.css';

import useFetcher from '@/lib/fetcher';
import { AiTwotoneEdit } from 'react-icons/ai';

import Image from 'next/image';
import DeleteWidget from '@/components/widgets/popup/DeleteWidget';
import CreateNewProductModal from '@/components/widgets/modals/CreateNewProductModal';
import UpdateProduct from '@/components/widgets/modals/UpdateProduct';
const CreateNewProduct = () => {
  const allProducts = useFetcher('products');
  const [open, setOpen] = useState(false);
  const myRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const CARDS_PER_PAGE = 8;
  const totalPages = Math.ceil(allProducts.data?.length / CARDS_PER_PAGE);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Layout>
      {/* Modal toggle */}
      <div className="relative">
        <div id="" className="flex justify-between m-5">
          <h2 className="text-xl">Add New Product</h2>
          <div>
            <CreateNewProductModal
              myRef={myRef}
              open={open}
              setOpen={setOpen}
            />
          </div>
        </div>
        {/* Main modal */}

        {/* =====--- All Products --- ==== */}
        <div className="bg-white p-5 grid gap-4 grid-cols-4">
          {allProducts.data
            ?.slice(
              (currentPage - 1) * CARDS_PER_PAGE,
              currentPage * CARDS_PER_PAGE
            )
            .map(product => (
              <div
                key={product._id}
                className="max-w-sm  p-4 border border-slate-200 rounded-md max-h-64 h-64"
              >
                <Image
                  src={product.mediaUrl || '/'}
                  alt={product.name}
                  width={200}
                  height={200}
                  className=" object-cover w-full h-28"
                />
                <h5 className="text-base mt-2 font-serif font-medium  text-gray-900 ">
                  {product.name}
                </h5>
                <h4 className="text-2x py-3 font-serif font-bold  text-gray-900 ">
                  {product.price}$
                </h4>
                <div className="flex justify-between">
                  <UpdateProduct product={product} />
                  {/* Delete Button Widget */}
                  <DeleteWidget productSlug={product} />
                </div>
              </div>
            ))}
        </div>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
          color="primary"
        />
      </div>
    </Layout>
  );
};

export default CreateNewProduct;
