// https://www.omnicalculator.com/finance/unlevered-free-cash-flow

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const unleveredfreecashflowRadio = document.getElementById('unleveredfreecashflowRadio');
const EBITRadio = document.getElementById('EBITRadio');
const effectivetaxrateRadio = document.getElementById('effectivetaxrateRadio');
const depreciationandamortizationRadio = document.getElementById('depreciationandamortizationRadio');
const capitalexpendituresRadio = document.getElementById('capitalexpendituresRadio');
const netchangeinworkingcapitalRadio = document.getElementById('netchangeinworkingcapitalRadio');

let unleveredfreecashflow;
let EBIT = v1;
let effectivetaxrate = v2;
let depreciationandamortization = v3;
let capitalexpenditures = v4;
let netchangeinworkingcapital = v5;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');

unleveredfreecashflowRadio.addEventListener('click', function() {
  variable1.textContent = 'EBIT';
  variable2.textContent = 'Effective tax rate';
  variable3.textContent = 'Depreciation and amortization';
  variable4.textContent = 'Capital expenditures';
  variable5.textContent = 'Net change in working capital';
  EBIT = v1;
  effectivetaxrate = v2;
  depreciationandamortization = v3;
  capitalexpenditures = v4;
  netchangeinworkingcapital = v5;
  result.textContent = '';
});

EBITRadio.addEventListener('click', function() {
  variable1.textContent = 'Unlevered free cash flow';
  variable2.textContent = 'Effective tax rate';
  variable3.textContent = 'Depreciation and amortization';
  variable4.textContent = 'Capital expenditures';
  variable5.textContent = 'Net change in working capital';
  unleveredfreecashflow = v1;
  effectivetaxrate = v2;
  depreciationandamortization = v3;
  capitalexpenditures = v4;
  netchangeinworkingcapital = v5;
  result.textContent = '';
});

effectivetaxrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Unlevered free cash flow';
  variable2.textContent = 'EBIT';
  variable3.textContent = 'Depreciation and amortization';
  variable4.textContent = 'Capital expenditures';
  variable5.textContent = 'Net change in working capital';
  unleveredfreecashflow = v1;
  EBIT = v2;
  depreciationandamortization = v3;
  capitalexpenditures = v4;
  netchangeinworkingcapital = v5;
  result.textContent = '';
});

depreciationandamortizationRadio.addEventListener('click', function() {
  variable1.textContent = 'Unlevered free cash flow';
  variable2.textContent = 'EBIT';
  variable3.textContent = 'Effective tax rate';
  variable4.textContent = 'Capital expenditures';
  variable5.textContent = 'Net change in working capital';
  unleveredfreecashflow = v1;
  EBIT = v2;
  effectivetaxrate = v3;
  capitalexpenditures = v4;
  netchangeinworkingcapital = v5;
  result.textContent = '';
});

capitalexpendituresRadio.addEventListener('click', function() {
  variable1.textContent = 'Unlevered free cash flow';
  variable2.textContent = 'EBIT';
  variable3.textContent = 'Effective tax rate';
  variable4.textContent = 'Depreciation and amortization';
  variable5.textContent = 'Net change in working capital';
  unleveredfreecashflow = v1;
  EBIT = v2;
  effectivetaxrate = v3;
  depreciationandamortization = v4;
  netchangeinworkingcapital = v5;
  result.textContent = '';
});

netchangeinworkingcapitalRadio.addEventListener('click', function() {
  variable1.textContent = 'Unlevered free cash flow';
  variable2.textContent = 'EBIT';
  variable3.textContent = 'Effective tax rate';
  variable4.textContent = 'Depreciation and amortization';
  variable5.textContent = 'Capital expenditures';
  unleveredfreecashflow = v1;
  EBIT = v2;
  effectivetaxrate = v3;
  depreciationandamortization = v4;
  capitalexpenditures = v5;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(unleveredfreecashflowRadio.checked)
    result.textContent = `Unlevered free cash flow = ${computeunleveredfreecashflow().toFixed(2)}`;

  else if(EBITRadio.checked)
    result.textContent = `EBIT = ${computeEBIT().toFixed(2)}`;

  else if(effectivetaxrateRadio.checked)
    result.textContent = `Effective tax rate = ${computeeffectivetaxrate().toFixed(2)}`;

  else if(depreciationandamortizationRadio.checked)
    result.textContent = `Depreciation and amortization = ${computedepreciationandamortization().toFixed(2)}`;

  else if(capitalexpendituresRadio.checked)
    result.textContent = `Capital expenditures = ${computecapitalexpenditures().toFixed(2)}`;

  else if(netchangeinworkingcapitalRadio.checked)
    result.textContent = `Net change in working capital = ${computenetchangeinworkingcapital().toFixed(2)}`;
})

// calculation

// unleveredfreecashflow = EBIT × (1 - effectivetaxrate) + depreciationandamortization - capitalexpenditures + netchangeinworkingcapital

function computeunleveredfreecashflow() {
  return Number(EBIT.value) * (1 - (Number(effectivetaxrate.value) / 100)) + Number(depreciationandamortization.value) - Number(capitalexpenditures.value) + Number(netchangeinworkingcapital.value);
}

function computeEBIT() {
  return (Number(unleveredfreecashflow.value) - Number(depreciationandamortization.value) + Number(capitalexpenditures.value) - Number(netchangeinworkingcapital.value)) / (1 - (Number(effectivetaxrate.value) / 100));
}

function computeeffectivetaxrate() {
  return (1 - ((Number(unleveredfreecashflow.value) - Number(depreciationandamortization.value) + Number(capitalexpenditures.value) - Number(netchangeinworkingcapital.value)) / Number(EBIT.value))) * 100;
}

function computedepreciationandamortization() {
  return Number(unleveredfreecashflow.value) - (Number(EBIT.value) * (1 - (Number(effectivetaxrate.value) / 100))) + Number(capitalexpenditures.value) - Number(netchangeinworkingcapital.value);
}

function computecapitalexpenditures() {
  return Number(EBIT.value) * (1 - (Number(effectivetaxrate.value) / 100)) + Number(depreciationandamortization.value) - Number(unleveredfreecashflow.value) + Number(netchangeinworkingcapital.value);
}

function computenetchangeinworkingcapital() {
  return Number(unleveredfreecashflow.value) - (Number(EBIT.value) * (1 - (Number(effectivetaxrate.value) / 100))) + Number(capitalexpenditures.value) - Number(depreciationandamortization.value);
}