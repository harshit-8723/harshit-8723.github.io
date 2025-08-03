import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { items } from '../data';

const Grid = () => {
  return (
    <section id="overview" className="p-4 border border-neutral-200 rounded-3xl">
      <BentoGrid>
        {items.map((item) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            about={item.about}
            description={item.description}
            extraClasses={item.extraClasses}
            heading1={item.heading1}
            heading2={item.heading2}
            heading3={item.heading3}
            badges={item.badges}
            img={item.img}
            imgList={item.imgList}
            imgClassName={item.imgClassName}
          />

        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
