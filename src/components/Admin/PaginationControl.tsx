import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { PagintaionControlProps } from "@/types/RecipeForm.types"

export default function PaginationControl({ prevPage, changePage, numbers, nextPage }: PagintaionControlProps) {
  return (
    <Pagination className="w-full items-center py-10 ">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={prevPage} />
        </PaginationItem>
        <PaginationItem>
          {numbers.map((number, i) => (
            <PaginationLink href="#" onClick={() => changePage(number)} key={i}>
              {number}
            </PaginationLink>
          ))}
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" onClick={nextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
