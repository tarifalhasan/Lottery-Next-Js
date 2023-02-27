import Image from 'next/image';

export default function Error() {
  return (
    <div className="main-container">
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-orange-600 py-10">
          Something Went Wrong
        </h1>
        <Image
          src={'/not_found.png'}
          alt="page"
          width={200}
          height={200}
          className="bolck mx-auto"
        ></Image>
      </div>
    </div>
  );
}
