import safetyPillarImg from '~/assets/img/mepco-pillar.png';
import productsPillarImg from '~/assets/img/mepco-pillar-2.png';
import investorsPillarImg from '~/assets/img/mepco-pillar-3.png';
import environmentPillarImg from '~/assets/img/mepco-pillar-4.png';

export interface pillarType {
  image: string;
  caption: string;
  text: string;
}
export const pillarsArray: Array<pillarType> = [
  {
    caption: 'الصحة والسلامة',
    image: safetyPillarImg,
    text: "تلتزم شركة مبكو بالصحة والسلامة والأمن في أعمالها. وتعمل الشركة بشكل مستمر على تقليل المخاطر والآثار الناجمة عن أعمالها، وتطبق معايير السلامة المهنية والسلامة من الحرائق وأضرار المواد الخطرة، وتلتزم بتدابير السلامة في جميع الإدارات وفي جميع أعمال الصيانة والمعدات والبناء.تعمل الشركة على تشغيل المرافق بطريقة آمنة وفعالة وبكفاءة عالية، وتلتزم بجميع القوانين والسياسات والمعايير والإجراءات المتعلقة بالصحة والسلامةوالأمن. كما تعمل الشركة على تحسين أدائها في هذه المجالات من خلال مشاركة المعلومات المتاحة والتعاون مع الشركاء والمقاولين والمنافسين والجهات الرقابية المعنية. وتوفر الشركة التغطية التأمينية اللازمة لحماية الأفراد والمنشآت من الأخطار."
  },
  {
    caption: 'المنتجات',
    image: productsPillarImg,
    text: '2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis accusantium magnam minima voluptates sed. Hic reiciendis suscipit soluta accusamus! Sunt, consectetur culpa. Totam dignissimos omnis soluta eos, esse molestias assumenda?',
  },
  {
    caption: 'المستثمرون',
    image: investorsPillarImg,
    text: '3Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis accusantium magnam minima voluptates sed. Hic reiciendis suscipit soluta accusamus! Sunt, consectetur culpa. Totam dignissimos omnis soluta eos, esse molestias assumenda?',
  },
  {
    caption: 'البيئة',
    image: environmentPillarImg,
    text: '4Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis accusantium magnam minima voluptates sed. Hic reiciendis suscipit soluta accusamus! Sunt, consectetur culpa. Totam dignissimos omnis soluta eos, esse molestias assumenda?',
  },
];
