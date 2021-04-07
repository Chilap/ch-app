const Airtable = require('airtable');

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID)


const table = base(process.env.AIRTABLE_ROOMS_TABLE_NAME);

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = records => {
  return records.map(record => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = record => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export default async function getRooms() {
  const records = await table.select({
    sort: [{field: "id", direction: "asc"}],
  }).all();
  const minifiedRecords = await getMinifiedRecords(records);

  console.log(minifiedRecords);

  return minifiedRecords;
}

// sort%5B0%5D%5Bfield%5D=id
// sort%5B0%5D%5Bdirection%5D=desc
// [{field: "id", direction: "desc"}]



// A list of sort objects that specifies how the records will be ordered. Each sort object must have a field key specifying the name of the field to sort on, and an optional direction key that is either "asc" or "desc". The default direction is "asc".

// The sort parameter overrides the sorting of the view specified in the view parameter. If neither the sort nor the view parameter is included, the order of records is arbitrary.

// For example, to sort records by Name in descending order, send these two query parameters:

// sort%5B0%5D%5Bfield%5D=Name

// sort%5B0%5D%5Bdirection%5D=desc

// For example, to sort records by Name in descending order, pass in:

// [{field: "Name", direction: "desc"}]

