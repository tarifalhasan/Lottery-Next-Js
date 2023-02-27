import Image from 'next/image';

const Spinner = () => {
  return (
    <div className="flex justify-center">
      <Image src="/loading__.gif" alt="loafing" width={200} height={80} />
    </div>
  );
};

export default Spinner;
