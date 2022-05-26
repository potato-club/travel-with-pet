import { TypoGraphy } from 'src/components';
import styled from 'styled-components';
import { customColor } from 'src/constants';
import { useState } from 'react';

type Props = {
  text: string;
};

export const TabsCategory = ({ text }: Props) => {
  const [tab, setTab] = useState('정보');
  return (
    <>
      <Hr />
      <Title>
        <TypoGraphy type="h1" fontWeight="bold">
          {text}
        </TypoGraphy>
      </Title>
      <Tabs>
        <TabInfo
          selected={tab}
          onClick={() => {
            setTab('정보');
          }}
        >
          <TypoGraphy
            type="body1"
            fontWeight="bold"
            color={customColor.brownDark}
          >
            정보
          </TypoGraphy>
        </TabInfo>
        <TabOurs
          selected={tab}
          onClick={() => {
            setTab('모두의 이야기');
          }}
        >
          <TypoGraphy type="body1" fontWeight="bold">
            모두의 이야기
          </TypoGraphy>
        </TabOurs>
      </Tabs>
    </>
  );
};

const Hr = styled.hr`
  margin-top: 80px;
  width: 1178px;
`;

const Title = styled.div`
  padding: 24px;
`;

const Tabs = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabInfo = styled.div<{ selected: any }>`
  padding: 8px;
  padding-top: 0px;
  padding-bottom: 32px;
  & div {
    color: ${({ selected }) =>
      selected === '정보' ? customColor.brownDark : customColor.gray};
  }
`;

const TabOurs = styled.div<{ selected: any }>`
  padding: 8px;
  padding-top: 0px;
  padding-bottom: 32px;
  & div {
    color: ${props =>
      props.selected !== '정보' ? customColor.brownDark : customColor.gray};
  }
`;
