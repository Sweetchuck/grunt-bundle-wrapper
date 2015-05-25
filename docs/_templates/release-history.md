{%
  for (var rhVersion in releaseHistory) {
    if (releaseHistory.hasOwnProperty(rhVersion)) {
      %}{%= '* **' + rhVersion + '** - ' + releaseHistory[rhVersion].date + "\n" %}{%
      %}{%= '  * ' + releaseHistory[rhVersion].changes.join("\n  * ") + "\n" %}{%
    }
  }
%}
