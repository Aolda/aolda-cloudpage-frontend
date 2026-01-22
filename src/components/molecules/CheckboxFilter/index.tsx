import * as S from './style';

export interface FilterItem {
  /** 필터 ID */
  id: string;
  /** 필터 라벨 */
  label: string;
}

export interface CheckboxFilterProps {
  /** 필터 항목 목록 */
  items: FilterItem[];
  /** 선택된 필터 ID 목록 */
  selectedIds?: string[];
  /** 필터 선택 변경 핸들러 */
  onChange?: (selectedIds: string[]) => void;
}

/**
 * 체크박스 필터 컴포넌트
 * 
 * 다중 선택이 가능한 체크박스 형태의 필터입니다.
 * 
 * @param {CheckboxFilterProps} props - 체크박스 필터 props
 * @param {FilterItem[]} props.items - 필터 항목 목록
 * @param {string[]} [props.selectedIds] - 선택된 필터 ID 목록
 * @param {Function} [props.onChange] - 필터 선택 변경 핸들러
 * 
 * @example
 * <CheckboxFilter
 *   items={[
 *     { id: 'favorites', label: '즐겨찾기' },
 *     { id: 'server', label: '서버' },
 *   ]}
 *   selectedIds={['favorites']}
 *   onChange={(ids) => console.log(ids)}
 * />
 * 
 * @returns {JSX.Element} 체크박스 필터 요소
 */
const CheckboxFilter = ({
  items,
  selectedIds = [],
  onChange,
}: CheckboxFilterProps) => {
  const handleToggle = (itemId: string) => {
    if (!onChange) return;

    const isSelected = selectedIds.includes(itemId);
    if (isSelected) {
      onChange(selectedIds.filter((id) => id !== itemId));
    } else {
      onChange([...selectedIds, itemId]);
    }
  };

  return (
    <S.Container>
      {items.map((item) => {
        const isSelected = selectedIds.includes(item.id);
        return (
          <S.Option key={item.id}>
            <S.Label>
              <S.Input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleToggle(item.id)}
              />
              <S.Checkmark $checked={isSelected} />
              {item.label}
            </S.Label>
          </S.Option>
        );
      })}
    </S.Container>
  );
};

export default CheckboxFilter;

