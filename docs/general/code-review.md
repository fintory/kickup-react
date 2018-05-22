# Code Review

Since quality is the MVP of Kreativgebiet/Fintory, we also want to ship code that uses the same approach as for UI and UX. Hence we are introducing _Code Reviews_.

## How to start a code review?

Code reviews are simply the approval of a pull request. Since you enabled the `master` and `develop` branch, to be a [_Protected branch_](./setup.md#setup-of-github-repository), you are needed to work in branches other than those two, and then issue a pull request and "ask" to be merged into `develop`.

To read how to create a pull request, [continue here](https://help.github.com/articles/about-pull-requests/) or try to wrap your head around the following steps.

## Steps to follow for a code review (mandatory to merge)

1. Create a new branch with `git checkout -b BRANCH_NAME` (be sure to replace BRANCH_NAME with a descriptive name in [`kebab-case`](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles))
1. Do awesome stuff in the sub-branch.
1. Go to the "Pull requests" section of your GitHub repository and click on "New pull request".
1. On the dropdown calling "compare: master" select the new branch you created and click "Create pull request"
1. In the sidebar you can now see the "Reviewers" section, where you can try to select one of your co-developers (also called pair-programmer).

> **Warning:** You may not be able to merge the pull request into `develop`, as long as the CI didn't run properly. Be sure, that the CI flags are all green. Otherwise, you need to do another commit.
