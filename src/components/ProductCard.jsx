export default function ProductCard({ title, imageUrl, description }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-1">
      <div className="px-6 py-3">
        <div className="font-bold text-xl ">{title}</div>
      </div>
      <img
        className="w-full max-h-40 px-4 rounded-2xl"
        src={imageUrl}
        alt={`Imagen de ${title}`}
      />
      <div className="px-6 py-4">
        <p className="text-white text-base font-medium">{description}</p>
      </div>
    </div>
  );
}
