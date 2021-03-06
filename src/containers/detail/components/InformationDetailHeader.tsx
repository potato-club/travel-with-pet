import { TypoGraphy } from 'src/components';
import { Tag } from 'src/components/photoCardList/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';
// import { AiFillHeart } from 'react-icons/ai';
// import { BsPerson } from 'react-icons/bs';
import { formatDate } from 'src/utils/formatDate';
import { InformationBoardType } from 'src/types/board.type';

type Props = {
  detailInfo?: InformationBoardType;
};
export const InformationDetailHeader = ({ detailInfo }: Props) => {
  return (
    <Container>
      <Area>
        <TypoGraphy type="Title" color={customColor.orange} fontWeight="bold">
          {detailInfo?.city}
        </TypoGraphy>
      </Area>
      <DetailArea>
        <TypoGraphy type="h3" color={customColor.black} fontWeight="bold">
          {detailInfo?.detailCity}
        </TypoGraphy>
      </DetailArea>
      <TagWrapper>
        <Tag Tags={detailInfo?.tags} />
      </TagWrapper>
      <InfoWrapper>
        <Info>
          <TypoGraphy type="body2" color={customColor.gray} fontHeight="20px">
            {detailInfo?.owner.name}
          </TypoGraphy>
        </Info>
        <Info>
          <TypoGraphy type="body2" color={customColor.gray} fontHeight="20px">
            {detailInfo && formatDate(detailInfo.createdAt)}
          </TypoGraphy>
        </Info>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 320px;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${customColor.gray};
`;
const Area = styled.div``;
const DetailArea = styled.div``;
const TagWrapper = styled.div``;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12px;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  height: 100%;

  border-left: 1px solid ${customColor.gray};
  :first-child {
    border-left: 0px;
  }
`;

// const IconWrapper = styled.div<{ color: string }>`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-right: 8px;
//   color: ${({ color }) => color};
//   font-size: 20px;
// `;
