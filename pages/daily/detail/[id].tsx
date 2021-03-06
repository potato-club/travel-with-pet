import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { DailyDetailPage } from 'src/containers/detail/DailyDetailPage';
import { DailyBoardData } from 'src/dummy/dailyInfo';

const DailyDetail = () => {
  const router = useRouter();

  if (router.query.id && Number(router.query.id) > DailyBoardData.length) {
    return <div>페이지가 없습니다!</div>;
  } else if (
    router.query.id &&
    Number(router.query.id) <= DailyBoardData.length
  ) {
    const detailInfo = DailyBoardData.filter(
      data => data._id === router.query.id,
    )[0];
    return <DailyDetailPage detailInfo={detailInfo} />;
  }
  return <div>404 ERROR</div>;
};

// export async function getServerSideProps(context: { query: { id: number } }) {
//   const { id } = context.query;

//   // TODO: id 를 통해 detail 정보 가져오기
//   // TODO: return detail Data
//   return { props: { id } };
// }

export default DailyDetail;
