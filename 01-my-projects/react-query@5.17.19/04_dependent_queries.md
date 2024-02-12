Dependent (or serial) queries depend on the previous ones to finish before they can execute. Data is being populated in a waterfall effect, we can either render it as it gets received or display it all at once after all queries loading is completed.
- First we configure `labelsQuery`
- Next we configure `issuesQuery`, where in the configuration `enabled` is initially false.
- Once we obtain data from `labelsQuery`, our `issuesQuery` will execute