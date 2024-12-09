import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PagintaionControlProps {
  prevPage: () => void
  changePage: (e: number) => void
  nextPage: () => void
  numbers: number[]
  current: number
}

export default function PaginationControl({
  prevPage,
  changePage,
  numbers,
  current,
  nextPage,
}: PagintaionControlProps) {
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
