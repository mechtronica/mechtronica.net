data = [];
excluded_headers = [];
header_order = [
        "msrp",
        "type",
        "manufacturer",
        "name",
        "class",
        "fuel",
        "software",
        "size",
        "p-type",
        "pwr",
        "cool",
        "cpu",
        "str",
        "spd",
        "shield",
        "wt",
        "ht",
        "mods",
        "cargo",
        "rng",
        "trg",
        "dmg",
        "capacity",
        "targeting bonus",
        "slots",
        "special",
        "effect",
        "description"
];

type_select = document.getElementById('type-select')

mechdb_search = document.getElementById('mechdb-search')
mechdb_search.addEventListener('keypress', function(event) {
  // If the user presses the 'Enter' key on the keyboard
  if (event.key === 'Enter') {
    // Cancel the default action, if needed
    event.preventDefault();
    val = document.getElementById('mechdb-search').value;
    showJson(val);
  }
}); 

loadDataFile('/mechdb/parts.json');

function loadDataFile(path) {
  fetch(path)
    .then((response) => response.json())
    .then((json) => data.push(...json))
    .then(() => showJson('$[*]'));
}

function onchange_typeselect() {
  showJson('$[?(@.type=="' + type_select.value + '")]')
}

function searchJson(search) {
  results = [];
  console.log(search);
  for (let x of data) {
    for (let y in x) {
      if (typeof x[y] === 'string' || x[y] instanceof String) {
        if ( x[y].toLowerCase().includes(search.toLowerCase())) {
          results.push(x);
          break;
        }
      }
    }
  }
  return results;
}

function showJson(query) {
  mechdb_search.value = query;
  headers = [];
  ordered_headers = [];
  text = '';
  filteredData = [];

  if (query != '')
  {
    if (query[0] == '$') {
      filteredData = jsonPath(data, query);
    }
    else {
      filteredData = searchJson(query);
    }
  }

  if (filteredData == false) {
    text = `<div class="alert alert-secondary" role="alert">
              <h4 class="alert-heading">No Results</h4>
              Search returned no results or JSONPath expression has a syntax error.
            </div>`;
  }
  else {

    for (let x of filteredData) {
      for (let y in x) {
        if (!excluded_headers.includes(y))
        {
          if (!headers.includes(y)) {
            headers.push(y);
          }
        }
      }
    }

    for (let x of header_order) {
      if (headers.includes(x)) {
        text += '<th>' + x + '</th>';
        ordered_headers.push(x)
      }
    }

    for (let x of filteredData) {
      text += '<tr>';
      for (let y of ordered_headers) {
        if (y == 'slots' && y in x) {
          text += '<td><a href="#modal-1" onclick="showFrameSlots(\'' + x.name + '\')">show</a></td>';
        }
        else {
          text += '<td>' + (y in x ? x[y] : '---' ) + '</td>';
        }
      }
      text += '</tr>';
    }
  }

  document.getElementById('results').innerHTML = text;
}