import { billingInfo } from '@/components/data/data';
const Table = () => {
  return (
    <>
      <div className="py-1 ">
        <div className="w-full  mb-12 xl:mb-0 mx-auto ">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="block w-full overflow-x-hidden">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead className="bg-[#01A8FF1F]">
                  <tr>
                    <th className="px-6 bg-blueGray-50 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Prize
                    </th>

                    <th className="px-6 bg-blueGray-50 text-blueGray-500 border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Date
                    </th>
                    <th className="px-6 float-right bg-blueGray-50 text-blueGray-500 border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Bounce rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {billingInfo.table.map((b, i) => (
                    <tr key={i}>
                      <th className="border-t-0 px-6 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {b.Prize}
                      </th>

                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {b.Cost}
                      </td>
                      <td className="border-t-0 float-right px-6 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {b.Date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      ​
    </>
  );
};

export default Table;
