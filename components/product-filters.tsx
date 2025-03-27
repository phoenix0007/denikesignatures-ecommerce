"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const categories = [
  { id: "clothing", name: "Clothing" },
  { id: "accessories", name: "Accessories" },
  { id: "footwear", name: "Footwear" },
]

const colors = [
  { id: "black", name: "Black" },
  { id: "white", name: "White" },
  { id: "red", name: "Red" },
  { id: "blue", name: "Blue" },
  { id: "green", name: "Green" },
]

const sizes = [
  { id: "xs", name: "XS" },
  { id: "s", name: "S" },
  { id: "m", name: "M" },
  { id: "l", name: "L" },
  { id: "xl", name: "XL" },
]

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const toggleColor = (colorId: string) => {
    setSelectedColors((prev) => (prev.includes(colorId) ? prev.filter((id) => id !== colorId) : [...prev, colorId]))
  }

  const toggleSize = (sizeId: string) => {
    setSelectedSizes((prev) => (prev.includes(sizeId) ? prev.filter((id) => id !== sizeId) : [...prev, sizeId]))
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Filters</h3>
        <Button variant="outline" size="sm" className="mb-4">
          Clear All
        </Button>
      </div>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
          Price Range
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 pb-2">
          <div className="space-y-4">
            <Slider defaultValue={[0, 500]} max={1000} step={10} value={priceRange} onValueChange={setPriceRange} />
            <div className="flex items-center justify-between">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
          Category
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 pb-2 space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
              />
              <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
          Color
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 pb-2 space-y-2">
          {colors.map((color) => (
            <div key={color.id} className="flex items-center space-x-2">
              <Checkbox
                id={`color-${color.id}`}
                checked={selectedColors.includes(color.id)}
                onCheckedChange={() => toggleColor(color.id)}
              />
              <Label htmlFor={`color-${color.id}`}>{color.name}</Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
          Size
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 pb-2 space-y-2">
          {sizes.map((size) => (
            <div key={size.id} className="flex items-center space-x-2">
              <Checkbox
                id={`size-${size.id}`}
                checked={selectedSizes.includes(size.id)}
                onCheckedChange={() => toggleSize(size.id)}
              />
              <Label htmlFor={`size-${size.id}`}>{size.name}</Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

