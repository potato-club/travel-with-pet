import * as S from './Header.style';
import { TypoGraphy } from '../TypoGraphy';
import { customColor } from 'src/constants';
import { NavItem } from './components/NavItem';
import { VscBell } from 'react-icons/vsc';
import Link from 'next/link';

export const Header = () => {
  return (
    <S.Container>
      <S.UpHeader>
        <Link href={'/'} passHref>
          <S.TitleWrapper>
            <TypoGraphy
              type="Title"
              color={customColor.brownDark}
              fontWeight="bold"
            >
              MoengMoeng
            </TypoGraphy>
          </S.TitleWrapper>
        </Link>
        <S.UpLeftWrapper>
          <S.WriteButtonWrapper>ButtonWrapper</S.WriteButtonWrapper>
          <S.AlertButtonWrapper>
            <VscBell />
          </S.AlertButtonWrapper>
        </S.UpLeftWrapper>
      </S.UpHeader>
      <S.DownHeader>
        <NavItem pathName={'/information'} customWidth="90">
          정보
        </NavItem>
        <NavItem pathName={'/daily'} customWidth="140">
          일상
        </NavItem>
        <NavItem pathName={'/mypage'} customWidth="100">
          마이페이지
        </NavItem>
      </S.DownHeader>
    </S.Container>
  );
};