import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function MyPagination(props) {

    const {currentPageNum, setcurrentPageNum} = props;

    return (
        <Pagination aria-label="Page navigation">
        <PaginationItem>
            <PaginationLink first href="#browse" onClick={ event => {
             setcurrentPageNum(1)
            }}/>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous href="#browse" onClick={ event => {
              setcurrentPageNum(currentPageNum - 1);
              if (currentPageNum === 0) {setcurrentPageNum(1)}
            //   currentPageNum === 0 ? setcurrentPageNum(1): 1+1
            }}/>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#browse" onClick={ event => {
             setcurrentPageNum(1)
            }}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#browse" onClick={ event => {
             setcurrentPageNum(2)
            }}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#browse" onClick={ event => {
             setcurrentPageNum(3)
            }}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#browse" onClick={ event => {
            setcurrentPageNum(4)
            }}>
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#browse" onClick={ event => {
             setcurrentPageNum(5)
            }}>
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#browse" onClick={ event => {
             setcurrentPageNum(6)
            }}>
              6
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#browse" onClick={ event => {
             setcurrentPageNum(7)
            }}>
              7
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#browse" onClick={ event => {
             setcurrentPageNum(8)
            }}>
              8
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#browse" onClick={ event => {
             setcurrentPageNum(9)
            }}>
              9
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#browse" onClick={ event => {
             setcurrentPageNum(10)
            }}>
              10
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#browse" onClick={ event => {
             setcurrentPageNum(11)
            }}>
              11
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#browse" onClick={ event => {
             setcurrentPageNum(12)
            }}>
              12
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#browse" onClick={ event => {
              if (currentPageNum === 98) {return}
              setcurrentPageNum(currentPageNum + 1);
            }}/>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#browse" onClick={ event => {
             setcurrentPageNum(98)
            }}/>
          </PaginationItem>
        </Pagination>
    )
}
