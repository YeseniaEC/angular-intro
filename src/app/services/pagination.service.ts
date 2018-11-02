import { Injectable } from '@angular/core';
import * as _ from 'underscore'; // * means wildcard


@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }
  getPager(allItems: number, currentPage: number = 1, itemsOnPage: number = 12) {
    const pagesCount = Math.ceil(allItems / itemsOnPage);
    let firstPage: number, lastPage: number;
    if (pagesCount <= 12 ) {
      firstPage = 1;
      lastPage = pagesCount;
    } else {
      if (currentPage <= 3 ) {
        firstPage = 1;
        lastPage = 4;
      } else if (currentPage + 1 >= pagesCount ) {// if the page is on the last few it will return the last four and not exceed the number of pages
        firstPage = pagesCount - 4;
        lastPage = pagesCount;
      } else {
        firstPage = currentPage - 2; // if the page count is in between the first and last pages it will give you back 2 more/less
        lastPage = currentPage + 2;
      }
    }
    const startIndex = (currentPage - 1) * itemsOnPage;
    const endIndex = Math.min( startIndex + itemsOnPage - 1, allItems - 1 );
    const pages = _.range(firstPage, lastPage + 1);
    return {
      allItems: allItems,
      currentPage: currentPage,
      itemsOnPage: itemsOnPage,
      pagesCount: pagesCount,
      firstPage: firstPage,
      lastPage: lastPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}
