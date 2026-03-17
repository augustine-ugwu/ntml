// PRODUCTS PAGE

export default function Products() {
  return (
    <div className="px-6 md:px-16 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Our Vehicles</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-xl">
          <h2 className="font-semibold">Heavy-Duty Trucks</h2>
        </div>
        <div className="p-6 border rounded-xl">
          <h2 className="font-semibold">Cargo Trucks</h2>
        </div>
        <div className="p-6 border rounded-xl">
          <h2 className="font-semibold">Tractors</h2>
        </div>
        <div className="p-6 border rounded-xl">
          <h2 className="font-semibold">Mass Transit</h2>
        </div>
      </div>
    </div>
  );
}
