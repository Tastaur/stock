export interface SearchBarForm {
  searchText: string,
}


export interface SearchBarProps {
  onSubmit: (data: SearchBarForm) => void;
  form: Partial<SearchBarForm>;
  onClear: () => void;
}