interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  const creditSum = subject1.credits + subject2.credits;
  return { credits: creditSum, brand: 'Major' };
}
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  const creditSum = subject1.credits + subject2.credits;
  return { credits: creditSum, brand: 'Minor' };
}

const majorSubject1: MajorCredits = { credits: 130, brand: 'Major' };
const majorSubject2: MajorCredits = { credits: 50, brand: 'Major' };
const minorSubject1: MinorCredits = { credits: 30, brand: 'Minor' };
const minorSubject2: MinorCredits = { credits: 15, brand: 'Minor' };

console.log(sumMajorCredits(majorSubject1, majorSubject2));
console.log(sumMinorCredits(minorSubject1, minorSubject2));
