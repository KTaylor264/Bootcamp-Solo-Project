function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("sort-table");
  switching = true;

  // Set the sorting direction to ascending:
  dir = "asc";

  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;

    // Loop through all table rows (except the first, which contains table headers):
    for (i = 1; i < (rows.length - 1); i++)
    {
	    // Start by saying there should be no switching:
	    shouldSwitch = false;

	    // Get the two elements you want to compare, one from current row and one from the next:
	    x = rows[i].getElementsByTagName("TD")[n];
	    y = rows[i + 1].getElementsByTagName("TD")[n];

		var compareX=isNaN(parseInt(x.innerHTML))?x.innerHTML.toLowerCase():parseInt(x.innerHTML);
        var compareY=isNaN(parseInt(y.innerHTML))?y.innerHTML.toLowerCase():parseInt(y.innerHTML);

        if (dir == "asc") {
            if (compareX > compareY) {
                shouldSwitch= true;
                break;
            }
        } else if (dir == "desc") {
            if (compareX < compareY) {
                shouldSwitch= true;
                break;
            }
        }
    }

    if (shouldSwitch) {
      // If a switch has been marked, make the switch and mark that a switch has been done:
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      // If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function checkStages(boolStages)
{
	for (var i = 0; i < boolStages.length; i++)
	{
		switch (i)
		{
			case 0:
			{
				if (boolStages[i] == true)
				{
					var check = document.getElementById("Baby");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("Baby");
					check.checked = false;
				}
			}
			break;
			case 1:
			{
				if (boolStages[i] == true)
				{
					var check = document.getElementById("In-Training");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("In-Training");
					check.checked = false;
				}
			}
			break;
			case 2:
			{
				if (boolStages[i] == true)
				{
					var check = document.getElementById("Rookie");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("Rookie");
					check.checked = false;
				}
			}
			break;
			case 3:
			{
				if (boolStages[i] == true)
				{
					var check = document.getElementById("Champion");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("Champion");
					check.checked = false;
				}
			}
			break;
			case 4:
			{
				if (boolStages[i] == true)
				{
					var check = document.getElementById("Ultimate");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("Ultimate");
					check.checked = false;
				}
			}
			break;
			case 5:
			{
				if (boolStages[i] == true)
				{
					var check = document.getElementById("Mega");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("Mega");
					check.checked = false;
				}
			}
			break;
			case 6:
			{
				if (boolStages[i] == true)
				{
					var check = document.getElementById("Ultra");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("Ultra");
					check.checked = false;
				}
			}
			break;
			case 7:
			{
				if (boolStages[i] == true)
				{
					var check = document.getElementById("Armor");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("Armor");
					check.checked = false;
				}
			}
			break;
			case 8:
			{
				if (boolStages[i] == true)
				{
					var check = document.getElementById("None");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("None");
					check.checked = false;
				}
			}
			break;
		}
	}
}

function checkTypes(boolTypes)
{
	for (var i = 0; i < boolTypes.length; i++)
	{
		switch (i)
		{
			case 0:
			{
				if (boolTypes[i] == true)
				{
					var check = document.getElementById("FREE");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("FREE");
					check.checked = false;
				}
			}
			break;
			case 1:
			{
				if (boolTypes[i] == true)
				{
					var check = document.getElementById("VIRUS");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("VIRUS");
					check.checked = false;
				}
			}
			break;
			case 2:
			{
				if (boolTypes[i] == true)
				{
					var check = document.getElementById("DATA");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("DATA");
					check.checked = false;
				}
			}
			break;
			case 3:
			{
				if (boolTypes[i] == true)
				{
					var check = document.getElementById("VACCINE");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("VACCINE");
					check.checked = false;
				}
			}
			break;
		}
	}
}

function checkAttribs(boolAttribs)
{
	for (var i = 0; i < boolAttribs.length; i++)
	{
		switch (i)
		{
			case 0:
			{
				if (boolAttribs[i] == true)
				{
					var check = document.getElementById("NEUTRAL");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("NEUTRAL");
					check.checked = false;
				}
			}
			break;
			case 1:
			{
				if (boolAttribs[i] == true)
				{
					var check = document.getElementById("FIRE");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("FIRE");
					check.checked = false;
				}
			}
			break;
			case 2:
			{
				if (boolAttribs[i] == true)
				{
					var check = document.getElementById("PLANT");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("PLANT");
					check.checked = false;
				}
			}
			break;
			case 3:
			{
				if (boolAttribs[i] == true)
				{
					var check = document.getElementById("WATER");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("WATER");
					check.checked = false;
				}
			}
			break;
			case 4:
			{
				if (boolAttribs[i] == true)
				{
					var check = document.getElementById("ELECTRIC");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("ELECTRIC");
					check.checked = false;
				}
			}
			break;
			case 5:
			{
				if (boolAttribs[i] == true)
				{
					var check = document.getElementById("WIND");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("WIND");
					check.checked = false;
				}
			}
			break;
			case 6:
			{
				if (boolAttribs[i] == true)
				{
					var check = document.getElementById("EARTH");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("EARTH");
					check.checked = false;
				}
			}
			break;
			case 7:
			{
				if (boolAttribs[i] == true)
				{
					var check = document.getElementById("LIGHT");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("LIGHT");
					check.checked = false;
				}
			}
			break;
			case 8:
			{
				if (boolAttribs[i] == true)
				{
					var check = document.getElementById("DARK");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("DARK");
					check.checked = false;
				}
			}
			break;
		}
	}
}

function checkGrowths(boolGrowths)
{
	for (var i = 0; i < boolGrowths.length; i++)
	{
		switch (i)
		{
			case 0:
			{
				if (boolGrowths[i] == true)
				{
					var check = document.getElementById("HEALTH");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("HEALTH");
					check.checked = false;
				}
			}
			break;
			case 1:
			{
				if (boolGrowths[i] == true)
				{
					var check = document.getElementById("ATTACK");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("ATTACK");
					check.checked = false;
				}
			}
			break;
			case 2:
			{
				if (boolGrowths[i] == true)
				{
					var check = document.getElementById("HASTE");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("HASTE");
					check.checked = false;
				}
			}
			break;
			case 3:
			{
				if (boolGrowths[i] == true)
				{
					var check = document.getElementById("TANK");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("TANK");
					check.checked = false;
				}
			}
			break;
			case 4:
			{
				if (boolGrowths[i] == true)
				{
					var check = document.getElementById("WALL");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("WALL");
					check.checked = false;
				}
			}
			break;
			case 5:
			{
				if (boolGrowths[i] == true)
				{
					var check = document.getElementById("SPIRIT");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("SPIRIT");
					check.checked = false;
				}
			}
			break;
			case 6:
			{
				if (boolGrowths[i] == true)
				{
					var check = document.getElementById("WISDOM");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("WISDOM");
					check.checked = false;
				}
			}
			break;
			case 7:
			{
				if (boolGrowths[i] == true)
				{
					var check = document.getElementById("AGILITY");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("AGILITY");
					check.checked = false;
				}
			}
			break;
			case 8:
			{
				if (boolGrowths[i] == true)
				{
					var check = document.getElementById("BALANCED");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("BALANCED");
					check.checked = false;
				}
			}
			break;
			case 9:
			{
				if (boolGrowths[i] == true)
				{
					var check = document.getElementById("DBLBARREL");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("DBLBARREL");
					check.checked = false;
				}
			}
			break;
			case 10:
			{
				if (boolGrowths[i] == true)
				{
					var check = document.getElementById("???");
					check.checked = true;
				}
				else
				{
					var check = document.getElementById("???");
					check.checked = false;
				}
			}
			break;
		}
	}
}