import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Search } from "./search.model";
import { TorrentService } from "./services/torrent.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  rowData: Search[];
  pageSize: number = 3;
  pageNo: number = 1;
  totalPages: number = 1;
  totalRecord: number = 0;
  rowDetail: any;
  dataArray = [];
  pagination = [];
  constructor(
    private torrentService: TorrentService,
    private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.dataArray = this.torrentService.data;
    this.rowData = this.paginate(this.dataArray, this.pageSize, this.pageNo);
    this.totalRecord = this.getTotalRecord(this.dataArray);
    this.totalPages = this.getTotalPages(this.dataArray);
    this.getPagination();
  }

  onSearch(str: string) {
    if (str != null) {
      const searchValue = str.toString().toLowerCase().trim();
      this.rowData = this.dataArray.filter((item: Search) => {
        return item.type.toLowerCase().includes(searchValue);
      });
      this.rowData = this.paginate(this.rowData, this.pageSize, this.pageNo);
      this.totalRecord = this.getTotalRecord(this.rowData);
      this.totalPages = this.getTotalPages(this.rowData);
      this.getPagination();
    } else {
      this.rowData = this.paginate(this.dataArray, this.pageSize, this.pageNo);
      this.totalRecord = this.getTotalRecord(this.dataArray);
      this.totalPages = this.getTotalPages(this.dataArray);
    }
  }
  goToNext() {
    // this.dataArray = [
    //   ...this.dataArray,
    //   { id: 10, Name: "Test", Description: "Test", type: "Test" }
    // ];
    this.pageNo = this.pageNo + 1;

    this.rowData = this.paginate(this.dataArray, this.pageSize, this.pageNo);
    this.totalPages = this.getTotalPages(this.dataArray);
    this.totalRecord = this.getTotalRecord(this.dataArray);
    this.getPagination();
    this.cdRef.detectChanges();
  }
  goToPrevious() {
    this.pageNo = this.pageNo - 1;
    if (this.pageNo > 0) {
      this.rowData = this.paginate(this.dataArray, this.pageSize, this.pageNo);
    }
  }
  paginate(arr: any, perpage: number, page: number) {
    return arr.slice(perpage * (page - 1), perpage * page);
  }
  getDetail(row: any) {
    this.rowDetail = row;
    // let index = this.rowData.findIndex((e) => e.id === row.id);
  }
  getTotalPages(arr: any): number {
    return Math.ceil(this.getTotalRecord(arr) / this.pageSize);
  }
  getTotalRecord(arr: any): number {
    return arr.length;
  }
  getPage(p: number) {
    this.pageNo = p;
    this.rowData = this.paginate(this.dataArray, this.pageSize, this.pageNo);
  }
  getPagination() {
    this.pagination = [];

    for (let index = 1; index <= this.totalPages; index++) {
      this.pagination.push(index);
    }
  }
}
