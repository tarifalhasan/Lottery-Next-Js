import { useState, useRef } from 'react';
import Layout from '@/components/dashboard/Layout';

import 'reactjs-popup/dist/index.css';

import useFetcher from '@/lib/fetcher';
import { AiTwotoneEdit, AiOutlinePlus } from 'react-icons/ai';

import Image from 'next/image';
import DeleteWidget from '@/components/widgets/popup/DeleteWidget';
import CreateNewProductModal from '@/components/widgets/modals/CreateNewProductModal';
const CreateNewProduct = () => {
  const products = useFetcher('products');
  const [open, setOpen] = useState(false);
  const myRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(open);
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
          {products.data?.map(product => (
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
              <h5 className="text-xl font-serif font-medium  text-gray-900 dark:text-white">
                {product.name}
              </h5>
              <h4 className="text-2xl font-serif font-bold  text-gray-900 dark:text-white">
                {product.price}$
              </h4>
              <div className="flex justify-between">
                <button className="py-1 flex items-center px-5 border border-slate-100">
                  <AiTwotoneEdit /> <span>Edit</span>
                </button>
                {/* Delete Button Widget */}
                <DeleteWidget />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CreateNewProduct;
