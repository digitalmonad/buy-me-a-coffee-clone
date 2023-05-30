export type TTimelineProps = {};

export const Timeline = ({ articles }: any) => {
  return (
    <div className='h-full'>
      {articles.map((article: any) => (
        <div className='bg-paper border border-gray-200 mb-4 rounded-md min-h-[300px]'>
          <div className='prose prose-slate p-8 lg:prose-lg'>
            <h2 className=''>{article.title}</h2>
            <p>{article.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
