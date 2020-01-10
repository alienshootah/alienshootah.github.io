import { select, selectAll } from 'd3-selection'
import { min, extent, range, descending } from 'd3-array'
import { format } from 'd3-format'
import { scaleLinear } from 'd3-scale'
import * as request from 'd3-request' // d3 submodule (contains d3.csv, d3.json, etc)
import { legendColor } from 'd3-svg-legend' // d3 plugin
import { lineChunked } from 'd3-line-chunked' // d3 plugin

// create a Object with only the subset of functions/submodules/plugins that we need
const d3 = Object.assign(
  {},
  {
    select,
    selectAll,
    min,
    extent,
    range,
    descending,
    format,
    scaleLinear,
    legendColor,
    lineChunked,
  },
  request
)

const svg = select('svg');
const circle = svg.append("circle");
circle.attr('r', 200);

