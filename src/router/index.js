import Vue from 'vue'
import VueRouter from 'vue-router'
//import LoginView from '../views/LoginView.vue'
import Face from '../components/FaceView.vue'
import HomeView from '../views/admin/HomeView.vue'
import LocationView from '../views/admin/LocationView.vue'
import StudentsView from '../views/admin/StudentsView.vue'
import PersonnelsView from '../views/admin/PersonnelsView.vue'
import LogRecordView from '../views/admin/LogRecordView.vue'
import DeclarationForm from '../views/admin/DeclarationForm.vue'
import AdminView from '../views/admin/AdminView.vue'
import UsersView from '../views/admin/UsersView.vue'
import ContactTraceView from '../views/admin/ContactTraceView.vue'
import ContactTraceNewView from '../views/admin/ViewTraceContact.vue'
import ContactTraceNew from '../views/admin/ContactTraceNew.vue'
import ReportGeneration from '../views/admin/ReportGeneration.vue'
import FaceDetection from '../views/FaceDetection.vue'
import CreateAccount from '../views/RegisterView.vue'
import Personnel from '@/views/personnels/HomeView.vue'
import CheckProfile from '@/views/admin/Profile/CheckProfile'
import EditProfile from '@/views/admin/Profile/EditProfile'
import hello from '@/components/HelloWorld.vue'
Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'hello',
    component: hello
  },
  {
    path: '/face',
    name: 'Face',
    component: Face
  },
  // {
  //   path: '/',
  //   name: 'LoginView',
  //   component: LoginView
  // },
  {
    path:'/facedetection',
    name:'FaceView',
    component:FaceDetection
  },
  {
    path: '/CreateAccount',
    component: CreateAccount
  },
  {
    path:'/authorizepersonnel',
    component:Personnel,
    children:[

    ]
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView,
    children:[
      {
        path: '',
        component: HomeView
      },
      {
        path:'users',
        component: UsersView
      },
      {
        path:'trace',
        component: ContactTraceView,
        children:
        [
          {
            path:'newtrace',
            component:ContactTraceNew
          },
          {
            path:'viewtrace',
            component:ContactTraceNewView
          },
        ]
      },
      {
        path: 'dashboard',
        component: HomeView
      },
      {
        path: 'location',
        component: LocationView
      },
      {
        path: 'students',
        component: StudentsView
      },
      {
        path: 'personnels',
        component: PersonnelsView
      },
      {
        path: 'logrecords',
        component: LogRecordView
      },
      {
        path: 'declarationform',
        component: DeclarationForm
      },
      {
        path: 'reportgeneration',
        component: ReportGeneration
      },
      {
        path:'checkprofile',
        component:CheckProfile
      }
      ,{
        path:'editprofile',
        component: EditProfile
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
