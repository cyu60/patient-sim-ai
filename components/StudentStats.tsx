const stats = [
  { name: "Num of courses", stat: "3" },
  { name: "Num of Remaining Cases", stat: "3" },
  { name: "Num of Completed Cases", stat: "4" },
];

export default function Stats() {
  return (
    <div>
      {/* <h3 className="text-base font-semibold leading-6 text-gray-900">
        Last 30 days
      </h3> */}
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
