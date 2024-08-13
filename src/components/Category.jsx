/* eslint-disable react/prop-types */
import Widget from './Widget';

const Category = ({ category }) => {
  return (
    <div className="mb-8">
      <h2 className="text-md font-bold mb-4">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.widgets.map(widget => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;