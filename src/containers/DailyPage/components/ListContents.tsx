import React, { useState } from 'react';
import { TypoGraphy } from 'src/components';
import styled from 'styled-components';
import { AiOutlinePicture } from 'react-icons/ai';
import { customColor } from 'src/constants';
import { Tag } from './Tag';
import { CustomPagination } from 'src/components/CustomPagination';
import Link from 'next/link';
import { DailyBoard } from 'src/dummy/dailyInfo';

export default function ListContents() {
  const [activePage, setActivePage] = useState<number>(1);
  // ! imageUrl 은 나중에 contents 에서 분리해야함.
  const formatDate = (date: Date) => {
    const formattedDate = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    ].join('-');
    return formattedDate;
  };
  return (
    <Container>
      {DailyBoard.map((data, index) => {
        // 이 부분은 나중에 api 호출로 바뀔거같음 (지금은 UI 구성을 위해 임시로 짜놓은 코드)
        if (index < activePage * 10 && index >= (activePage - 1) * 10)
          return (
            <ListWrapper key={data._id}>
              <LeftWrapper>
                {/* 우선, 좋아요가 아닌 넘버값으로 사용할 예정 */}
                <HeartWrapper>
                  <TypoGraphy type="body1" fontWeight="bold">
                    {index + 1}
                    {/* {data.Like} */}
                  </TypoGraphy>
                </HeartWrapper>
                <TitleContainer>
                  <Link href={`/daily/detail/${data._id}`}>
                    <a style={{ textDecoration: 'none' }}>
                      <TitleWrapper>
                        <TypoGraphy type="body1" fontWeight="bold">
                          {data.title}
                        </TypoGraphy>
                      </TitleWrapper>
                    </a>
                  </Link>
                  <TagWrapper>
                    {<Tag Tags={data.tags} />}
                  </TagWrapper>
                </TitleContainer>
              </LeftWrapper>
              <RightWrapper>
                <TextWrapper>
                  <TypoGraphy type="body1" fontWeight="bold">
                    {/* {data.ImageUrl && <AiOutlinePicture fontSize={28} />} */}
                  </TypoGraphy>
                </TextWrapper>
                <TextWrapper>
                  <TypoGraphy
                    type="body1"
                    fontWeight="bold"
                    color={customColor.brownDark}
                  >
                    ({data.commentCount})
                  </TypoGraphy>
                </TextWrapper>
                <TextWrapper>
                  <TypoGraphy type="body1" fontWeight="bold">
                    {data.owner.name}
                  </TypoGraphy>
                </TextWrapper>
                <TextWrapper>
                  <TypoGraphy type="body1" fontWeight="bold">
                    {formatDate(data.createdAt)}
                  </TypoGraphy>
                </TextWrapper>
              </RightWrapper>
            </ListWrapper>
          );
      })}
      <CustomPagination
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={DailyBoard.length}
        onChange={e => setActivePage(e)}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1178px;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const HeartWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 20%;
  width: 80px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 4px 0;
`;

const TitleWrapper = styled.div`
  div {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
const TagWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  border-bottom: 1px solid ${customColor.gray};
  width: 100%;
  max-width: 1178px;
`;

const RightWrapper = styled.div`
  display: flex;
  width: 50%;
`;

const TextWrapper = styled.div`
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
