import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { PagintaionControlProps } from "@/types/recipe.types"

export const PaginationControl = ({ numbers, prevPage, changePage, nextPage }: PagintaionControlProps) => {
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
