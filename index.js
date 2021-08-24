import fs from 'fs';
import path from 'path';
import randomItem from 'random-item';
import casual from 'casual';
import diseasesDataset from './fixtures/diseases.json';
import drugsDataset from './fixtures/drugs.json';

const numberOfItems = 200;

try {
  const drugs = Array.from(new Array(numberOfItems).keys()).map(() => ({
    id: casual.uuid,
    diseases: randomItem(diseasesDataset.diseases),
    description: casual.text,
    name: randomItem(drugsDataset.drugs),
    released: casual.date('YYYY-MM-DD'),
  }));

  fs.writeFileSync(
    path.join(process.cwd(), 'fixtures', 'dataset.json'),
    JSON.stringify({ drugs }, null, 2)
  );
} catch (error) {
  console.log('Error!', error);
}
