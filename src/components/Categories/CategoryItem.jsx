

const CategoryItem = ({ category }) => {
  const { label, icon: Icon } = category;
  return (
    <div className="w-28  border-b-4  hover:bg-red-600 hover:text-white rounded-lg border-red-600 text-neutral-500 py-2 mx-4 mb-2 cursor-pointer group">
      <div className="flex flex-col justify-center items-center group-hover:animate-bounce">
        <div className="text-sky-900">
        <Icon size={26} />
        </div>
        <div className="mx-2 font-semibold">{label}</div>
      </div>
    </div>
  );
};

export default CategoryItem;
