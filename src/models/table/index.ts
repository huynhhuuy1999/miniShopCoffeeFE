export interface ITableResponse {
  id: number;
  tableName: string;
  qr_code: string;
  status: string;
  qr_codeNew?: string | null;
  timeSrart?: string | null;
}

export interface ICreateTableRequest {
  tableName: string;
  status: string;
}
