import * as S from './style';

export interface SearchProps {
  /** 검색어 placeholder */
  placeholder?: string;
  /** 검색어 값 */
  value?: string;
  /** 검색어 변경 핸들러 */
  onChange?: (value: string) => void;
  /** 검색 실행 핸들러 */
  onSearch?: (value: string) => void;
}

/**
 * 검색 컴포넌트
 * 
 * 제품/서비스를 검색할 수 있는 입력 필드입니다.
 * 
 * @param {SearchProps} props - 검색 props
 * @param {string} [props.placeholder] - 검색어 placeholder
 * @param {string} [props.value] - 검색어 값
 * @param {Function} [props.onChange] - 검색어 변경 핸들러
 * @param {Function} [props.onSearch] - 검색 실행 핸들러
 * 
 * @example
 * <Search
 *   placeholder="계열/서비스를 검색해 보세요"
 *   value={searchTerm}
 *   onChange={setSearchTerm}
 *   onSearch={handleSearch}
 * />
 * 
 * @returns {JSX.Element} 검색 요소
 */
const Search = ({
  placeholder = '검색어를 입력하세요',
  value = '',
  onChange,
  onSearch,
}: SearchProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <S.SearchForm onSubmit={handleSubmit}>
      <S.SearchContainer>
        <S.SearchInput
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        <S.SearchIcon viewBox="0 0 24 24" fill="none">
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </S.SearchIcon>
      </S.SearchContainer>
    </S.SearchForm>
  );
};

export default Search;

