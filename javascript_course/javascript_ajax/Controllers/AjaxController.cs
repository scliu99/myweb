using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace javascript_ajax.Controllers
{
    public class AjaxController : ApiController
    {
        // GET api/ajax
        public string Get()
        {
            Thread.Sleep(5000);
            return "Hello World!";
        }

        // GET api/ajax value1, value2
        public string Get(string value1, string value2)
        {
            return "Hello World!" + value1 + "," + value2;
        }
        // POST api/ajax

        public string Post([FromBody]string value1)
        {
            return "Hello World!" + value1 ;
        }
    }
}
