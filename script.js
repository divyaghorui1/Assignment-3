{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": { "url": "path/to/building_inventory_data.csv" },
  "transform": [
    {
      "window": [
        {
          "op": "rank",
          "as": "rank"
        }
      ],
      "sort": [
        {
          "field": "count",
          "order": "descending"
        }
      ],
      "groupby": ["Agency Name"]
    },
    {
      "filter": "datum.rank <= 5"
    },
    {
      "aggregate": [
        {
          "op": "sum",
          "field": "Square Footage",
          "as": "totalSquareFootage"
        }
      ],
      "groupby": ["Agency Name", "Year Acquired"]
    }
  ],
  "mark": "line",
  "encoding": {
    "x": {
      "field": "Year Acquired",
      "type": "temporal",
      "title": "Year Acquired"
    },
    "y": {
      "field": "totalSquareFootage",
      "type": "quantitative",
      "title": "Square Footage"
    },
    "color": {
      "field": "Agency Name",
      "type": "nominal"
    }
  }
}
