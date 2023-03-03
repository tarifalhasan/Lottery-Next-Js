import { useState } from 'react';
import Popup from 'reactjs-popup';
import Progress from '@/components/widgets/Progress/Progress';
import { Alert } from '@mui/material';

import { AiTwotoneEdit } from 'react-icons/ai';

import ErrorToast from '../Toast/ErrorToast';

const UpdateProduct = ({ product }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [media, setMedia] = useState('');
  const [campaign, setCampaign] = useState('');
  const [category, setCategory] = useState('');
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  // create slug link indivisual product
  function createSlug(str) {
    return str
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  // handle submit event
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const slug = await createSlug(name);
    let mediaUrl = product.mediaUrl;
    if (media) {
      mediaUrl = await imageUpload();
    }
    const res = await fetch(`/api/products/${product.slug}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        price,
        mediaUrl,
        description,
        campaign,
        category,
        slug,
      }),
    });
    const data = await res.json();
    if (res.ok) {
      setLoading(false);
      setSuccess(true);
    } else {
      setLoading(false);
      setSuccess(false);
    }
  };

  // upload image to server cloud storage
  const imageUpload = async () => {
    const data = new FormData();
    data.append('file', media);
    data.append('upload_preset', 'lottery');
    data.append('cloud_name', 'dexvhll2f');
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/dexvhll2f/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    const res2 = await res.json();
    return res2.url;
  };

  return (
    <div>
      <Popup
        trigger={
          <button className="py-1 flex items-center px-5 border border-slate-100">
            <AiTwotoneEdit /> <span>Edit</span>
          </button>
        }
        modal
        nested
      >
        {close => (
          <div className="modal rounded-sm shadow p-5">
            <div className="flex justify-end">
              <button className="close text-4xl" onClick={close}>
                &times;
              </button>
            </div>

            {success === true && (
              <Alert severity="success">Product uploaded successfully</Alert>
            )}
            {success === false && (
              <Alert variant="outlined" severity="error">
                Product uploaded failed try again
              </Alert>
            )}

            {success == false && <ErrorToast />}
            <form action="POST" onSubmit={e => handleSubmit(e)}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Type product name"
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="campaign"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Campaign
                  </label>
                  <input
                    type="number"
                    id="campaign"
                    onChange={e => setCampaign(e.target.value)}
                    name="campaign"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Add Campaign"
                  />
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    onChange={e => setPrice(e.target.value)}
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="$2999"
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Category
                  </label>
                  <select
                    name="category"
                    onChange={e => setCategory(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  >
                    <option selected="">Select category</option>
                    <option value="Television">TV/Monitors</option>
                    <option value="Laptop">Laptop</option>

                    <option value="Phone">Phones</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    rows={4}
                    onChange={e => setDescription(e.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Write product description here"
                  />
                </div>
              </div>
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 "
                  for="file_input"
                >
                  Upload image
                </label>
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                  id="file_input"
                  type="file"
                  accept="image/*"
                  onChange={e => setMedia(e.target.files[0])}
                  placeholder="Upload image"
                />
              </div>

              <button
                type="submit"
                className="text-white mt-2 inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {loading ? <Progress /> : ''}
                Update product
              </button>
            </form>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default UpdateProduct;
