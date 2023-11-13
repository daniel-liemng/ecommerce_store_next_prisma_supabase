import { getBillboard } from '@/actions/get-billboard';
import Billboard from '@/components/billboard';

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard('4c2babca-d73f-4472-bf1e-0890dc25d5f4');

  console.log(billboard);

  return (
    <div className='space-y-10 pb-10'>
      <Billboard data={billboard} />
    </div>
  );
};

export default HomePage;
