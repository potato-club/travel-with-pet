import React from 'react';
import { TypoGraphy } from 'src/components';
import styled from 'styled-components';
import { customColor } from '../../constants/customColor';
type Props = {
  Tags?: string;
};
export function Tag({ Tags }: Props) {
  const tagsArray = Tags?.split('#');
  return (
    <TagContainer>
      {tagsArray?.map((tag, index) => {
        if (index === 0) return; // split('#') 를 사용해서 0번째 인덱스는 공백 '' 이 나옴.
        if (index < 5) { // 최대 4개까지 출력
          return (
            <TagWrapper key={index}>
              <TypoGraphy type="body3" color={customColor.brownDark}>
                {tag}
              </TypoGraphy>
            </TagWrapper>
          );
        }
      })}
    </TagContainer>
  );
}

const TagContainer = styled.div`
  display: flex;
  width: 350px;
`;
const TagWrapper = styled.div`
  max-width: 60px;
  padding: 5px 8px;
  margin: 5px 5px 0 0;
  div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  border: solid 1px ${customColor.brownDark};
  border-radius: 25px;
  :nth-child(n + 6) {
    // 5개 이후로는 display: none;
    display: none;
  }
`;
