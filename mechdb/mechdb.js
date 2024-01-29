max_text_len = 25;
data = [];
excluded_headers = [];
use_select_column = false;
select_column_header = 'select';
select_column_button_text = '●';
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
modal_title = document.getElementById('modal-title')
modal_content = document.getElementById('modal-content')
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

    if (use_select_column) {
      text += '<th>' + select_column_header + '</th>';
    }

    for (let x of header_order) {
      if (headers.includes(x)) {
        text += '<th>' + x + '</th>';
        ordered_headers.push(x);
      }
    }

    for (let x of filteredData) {
      text += '<tr>';
      if (use_select_column) {
        text += '<td><button class="btn btn-square" onclick="partClick(\'' + x.name + '\')">' + select_column_button_text + '</button></td>';
      }
      for (let y of ordered_headers) {
        text += '<td>';
        if (y in x) {
          if (y == 'slots') {
            text += '<a href="#modal-1" onclick="showFrameSlots(\'' + x.name + '\')">show</a>';
          }
          else {
            if (x[y].length > max_text_len) {
              text += '<a href="#modal-1" onclick="showText(\'' + y + '\', \'' + x[y] + '\')">show</a>';
            }
            else {
              text += x[y];
            }
          }
        }
        else {
          text += '---'
        }
        text += '</td>';
      }
      text += '</tr>';
    }
  }

  document.getElementById('results').innerHTML = text;
}

function showFrameSlots(name) {
  modal_title.innerHTML = name;
  modal_content.innerHTML = '<img class="img-fluid" src="' + window.location.origin + '/images/frames/' + encodeURIComponent(name) + '.svg"></img>'
}

function showText(title, text) {
  modal_title.innerHTML = title;
  modal_content.innerHTML = '<p>' + text + '</p>'
}