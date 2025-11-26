import { categories } from "@/data/products";
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryFilter = ({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className="w-full overflow-x-auto pb-4 sm:mx-0 sm:pb-0">
      <div className="flex gap-2 min-w-max">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => onSelectCategory(category.id)}
            className="whitespace-nowrap cursor-pointer"
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
