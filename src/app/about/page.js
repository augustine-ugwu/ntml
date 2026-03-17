// ABOUT PAGE

export default function About() {
  return (
    <div className="px-6 md:px-16 py-10 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">About NTML</h1>
      <p className="text-gray-600">
        NTML is a pioneer in Nigeria’s automotive manufacturing sector,
        producing trucks, tractors, and transit vehicles.
      </p>

      <h2 className="text-xl font-semibold">Our Vision</h2>
      <p className="text-gray-600">
        To be a leading automobile manufacturer in Africa.
      </p>

      <h2 className="text-xl font-semibold">Our Mission</h2>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Promote local manufacturing</li>
        <li>Deliver durable vehicles</li>
        <li>Support economic growth</li>
        <li>Create employment</li>
      </ul>
    </div>
  );
}
