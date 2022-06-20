export type DataType = {
  Kyivska: DataGType;
  Odeska: DataGType;
  Lvivska: DataGType;
};

export type DataGType = {
  G: {
    2017?: YearType;
    2018?: YearType;
    2019?: YearType;
  };
};

export type YearType = {
  XX: {
    value: number;
    dateRelease: string;
  };
  YY: {
    value: number;
    dateRelease: string;
  };
  ZZ: {
    value: number;
    dateRelease: string;
  };
};

export type PopupData = {
  value: number;
  date: string;
  user: string;
  comment: string;
};
