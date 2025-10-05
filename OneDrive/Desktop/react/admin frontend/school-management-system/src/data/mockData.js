const kidsData = Array(8).fill().map((_, i) => ({
    id: i + 1,
    name: "Dehemi Wijesuriya Dehemi Wijesuriya",
    indexNo: "ST-25-0071",
    class: "Sakura"
  }));

// Example functional component to wrap the JSX
function KidsStats() {
  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">450</h3>
          <p className="text-red-600 font-medium">Total</p>
        </div>
        <div className="bg-blue-100 rounded-lg p-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">230</h3>
          <p className="text-red-600 font-medium">Boys</p>
        </div>
        <div className="bg-orange-100 rounded-lg p-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">220</h3>
          <p className="text-red-600 font-medium">Girls</p>
        </div>
      </div>
      {/* Controls */}
    </div>
  );
}
        