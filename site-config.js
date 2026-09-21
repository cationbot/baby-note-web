const localHosts = new Set(['localhost', '127.0.0.1', '::1']);
window.BABY_NOTE_API_BASE = localHosts.has(window.location.hostname)
  ? ''
  : 'https://newborn-record-app-317015-7-1492253087.sh.run.tcloudbase.com';
