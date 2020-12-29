import MsProject from "@/business/components/project/MsProject";

const TestTrack = () => import('@/business/components/uitest/TestTrack')
const TrackHome = () => import('@/business/components/uitest/home/TrackHome')
const TestCase = () => import('@/business/components/uitest/case/TestCase')
const TestPlan = () => import('@/business/components/uitest/plan/TestPlan')
const TestCaseReview = () => import('@/business/components/uitest/review/TestCaseReview')
const TestCaseReviewView = () => import('@/business/components/uitest/review/view/TestCaseReviewView')
const TestPlanView = () => import('@/business/components/uitest/plan/view/TestPlanView')

export default {
  path: "/uitest",
  name: "uitest",
  redirect: "/uitest/home",
  components: {
    content: TestTrack
  },
  children: [
    {
      path: 'home',
      name: 'trackHome',
      component: TrackHome,
    },
    {
      path: 'case/create',
      name: 'testCaseCreate',
      component: TestCase,
    },
    {
      path: 'case/:projectId',
      name: 'testCase',
      component: TestCase,
    },
    {
      path: 'case/edit/:caseId',
      name: 'testCaseEdit',
      component: TestCase,
    },
    {
      path: "plan/:type",
      name: "testPlan",
      component: TestPlan
    },
    {
      path: "plan/view/:planId",
      name: "planView",
      component: TestPlanView
    },
    {
      path: "plan/view/edit/:caseId",
      name: "planViewEdit",
      component: TestPlanView
    },
    {
      path: "project/:type",
      name: "trackProject",
      component: MsProject
    },
    {
      path: "review/:type",
      name: "testCaseReview",
      component: TestCaseReview
    },
    {
      path: "review/view/:reviewId",
      name: "testCaseReviewView",
      component: TestCaseReviewView
    },
  ]
}
