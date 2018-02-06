Search.setIndex({docnames:["index","tensorflowonspark","tensorflowonspark.TFCluster","tensorflowonspark.TFManager","tensorflowonspark.TFNode","tensorflowonspark.TFSparkNode","tensorflowonspark.dfutil","tensorflowonspark.gpu_info","tensorflowonspark.marker","tensorflowonspark.pipeline","tensorflowonspark.reservation","tensorflowonspark.reservation_client","tensorflowonspark.util"],envversion:52,filenames:["index.rst","tensorflowonspark.rst","tensorflowonspark.TFCluster.rst","tensorflowonspark.TFManager.rst","tensorflowonspark.TFNode.rst","tensorflowonspark.TFSparkNode.rst","tensorflowonspark.dfutil.rst","tensorflowonspark.gpu_info.rst","tensorflowonspark.marker.rst","tensorflowonspark.pipeline.rst","tensorflowonspark.reservation.rst","tensorflowonspark.reservation_client.rst","tensorflowonspark.util.rst"],objects:{"":{tensorflowonspark:[1,0,0,"-"]},"tensorflowonspark.TFCluster":{InputMode:[2,1,1,""],TFCluster:[2,1,1,""],run:[2,4,1,""]},"tensorflowonspark.TFCluster.InputMode":{SPARK:[2,2,1,""],TENSORFLOW:[2,2,1,""]},"tensorflowonspark.TFCluster.TFCluster":{cluster_id:[2,2,1,""],cluster_info:[2,2,1,""],cluster_meta:[2,2,1,""],defaultFS:[2,2,1,""],inference:[2,3,1,""],input_mode:[2,2,1,""],nodeRDD:[2,2,1,""],num_executors:[2,2,1,""],queues:[2,2,1,""],sc:[2,2,1,""],server:[2,2,1,""],shutdown:[2,3,1,""],tensorboard_url:[2,3,1,""],train:[2,3,1,""],working_dir:[2,2,1,""]},"tensorflowonspark.TFManager":{TFManager:[3,1,1,""],connect:[3,4,1,""],start:[3,4,1,""]},"tensorflowonspark.TFNode":{DataFeed:[4,1,1,""],batch_results:[4,4,1,""],export_saved_model:[4,4,1,""],hdfs_path:[4,4,1,""],next_batch:[4,4,1,""],start_cluster_server:[4,4,1,""],terminate:[4,4,1,""]},"tensorflowonspark.TFNode.DataFeed":{batch_results:[4,3,1,""],next_batch:[4,3,1,""],should_stop:[4,3,1,""],terminate:[4,3,1,""]},"tensorflowonspark.TFSparkNode":{TFNodeContext:[5,1,1,""],TFSparkNode:[5,1,1,""],inference:[5,4,1,""],run:[5,4,1,""],shutdown:[5,4,1,""],train:[5,4,1,""]},"tensorflowonspark.TFSparkNode.TFNodeContext":{absolute_path:[5,3,1,""],export_saved_model:[5,3,1,""],get_data_feed:[5,3,1,""],start_cluster_server:[5,3,1,""]},"tensorflowonspark.TFSparkNode.TFSparkNode":{cluster_id:[5,2,1,""],mgr:[5,2,1,""]},"tensorflowonspark.dfutil":{fromTFExample:[6,4,1,""],infer_schema:[6,4,1,""],isLoadedDF:[6,4,1,""],loadTFRecords:[6,4,1,""],saveAsTFRecords:[6,4,1,""],toTFExample:[6,4,1,""]},"tensorflowonspark.gpu_info":{MAX_RETRIES:[7,5,1,""],get_gpus:[7,4,1,""]},"tensorflowonspark.marker":{EndPartition:[8,1,1,""],Marker:[8,1,1,""]},"tensorflowonspark.pipeline":{HasBatchSize:[9,1,1,""],HasClusterSize:[9,1,1,""],HasEpochs:[9,1,1,""],HasExportDir:[9,1,1,""],HasInputMapping:[9,1,1,""],HasInputMode:[9,1,1,""],HasModelDir:[9,1,1,""],HasNumPS:[9,1,1,""],HasOutputMapping:[9,1,1,""],HasProtocol:[9,1,1,""],HasReaders:[9,1,1,""],HasSignatureDefKey:[9,1,1,""],HasSteps:[9,1,1,""],HasTFRecordDir:[9,1,1,""],HasTagSet:[9,1,1,""],HasTensorboard:[9,1,1,""],Namespace:[9,1,1,""],TFEstimator:[9,1,1,""],TFModel:[9,1,1,""],TFParams:[9,1,1,""],TFTypeConverters:[9,1,1,""],get_meta_graph_def:[9,4,1,""],single_node_env:[9,4,1,""],yield_batch:[9,4,1,""]},"tensorflowonspark.pipeline.HasBatchSize":{batch_size:[9,2,1,""],getBatchSize:[9,3,1,""],setBatchSize:[9,3,1,""]},"tensorflowonspark.pipeline.HasClusterSize":{cluster_size:[9,2,1,""],getClusterSize:[9,3,1,""],setClusterSize:[9,3,1,""]},"tensorflowonspark.pipeline.HasEpochs":{epochs:[9,2,1,""],getEpochs:[9,3,1,""],setEpochs:[9,3,1,""]},"tensorflowonspark.pipeline.HasExportDir":{export_dir:[9,2,1,""],getExportDir:[9,3,1,""],setExportDir:[9,3,1,""]},"tensorflowonspark.pipeline.HasInputMapping":{getInputMapping:[9,3,1,""],input_mapping:[9,2,1,""],setInputMapping:[9,3,1,""]},"tensorflowonspark.pipeline.HasInputMode":{getInputMode:[9,3,1,""],input_mode:[9,2,1,""],setInputMode:[9,3,1,""]},"tensorflowonspark.pipeline.HasModelDir":{getModelDir:[9,3,1,""],model_dir:[9,2,1,""],setModelDir:[9,3,1,""]},"tensorflowonspark.pipeline.HasNumPS":{driver_ps_nodes:[9,2,1,""],getDriverPSNodes:[9,3,1,""],getNumPS:[9,3,1,""],num_ps:[9,2,1,""],setDriverPSNodes:[9,3,1,""],setNumPS:[9,3,1,""]},"tensorflowonspark.pipeline.HasOutputMapping":{getOutputMapping:[9,3,1,""],output_mapping:[9,2,1,""],setOutputMapping:[9,3,1,""]},"tensorflowonspark.pipeline.HasProtocol":{getProtocol:[9,3,1,""],protocol:[9,2,1,""],setProtocol:[9,3,1,""]},"tensorflowonspark.pipeline.HasReaders":{getReaders:[9,3,1,""],readers:[9,2,1,""],setReaders:[9,3,1,""]},"tensorflowonspark.pipeline.HasSignatureDefKey":{getSignatureDefKey:[9,3,1,""],setSignatureDefKey:[9,3,1,""],signature_def_key:[9,2,1,""]},"tensorflowonspark.pipeline.HasSteps":{getSteps:[9,3,1,""],setSteps:[9,3,1,""],steps:[9,2,1,""]},"tensorflowonspark.pipeline.HasTFRecordDir":{getTFRecordDir:[9,3,1,""],setTFRecordDir:[9,3,1,""],tfrecord_dir:[9,2,1,""]},"tensorflowonspark.pipeline.HasTagSet":{getTagSet:[9,3,1,""],setTagSet:[9,3,1,""],tag_set:[9,2,1,""]},"tensorflowonspark.pipeline.HasTensorboard":{getTensorboard:[9,3,1,""],setTensorboard:[9,3,1,""],tensorboard:[9,2,1,""]},"tensorflowonspark.pipeline.Namespace":{argv:[9,2,1,""]},"tensorflowonspark.pipeline.TFEstimator":{export_fn:[9,2,1,""],train_fn:[9,2,1,""]},"tensorflowonspark.pipeline.TFParams":{args:[9,2,1,""],merge_args_params:[9,3,1,""]},"tensorflowonspark.pipeline.TFTypeConverters":{toDict:[9,6,1,""]},"tensorflowonspark.reservation":{Client:[10,1,1,""],MessageSocket:[10,1,1,""],Reservations:[10,1,1,""],Server:[10,1,1,""]},"tensorflowonspark.reservation.Client":{await_reservations:[10,3,1,""],close:[10,3,1,""],get_reservations:[10,3,1,""],register:[10,3,1,""],request_stop:[10,3,1,""],server_addr:[10,2,1,""],sock:[10,2,1,""]},"tensorflowonspark.reservation.MessageSocket":{receive:[10,3,1,""],send:[10,3,1,""]},"tensorflowonspark.reservation.Reservations":{add:[10,3,1,""],done:[10,3,1,""],get:[10,3,1,""],remaining:[10,3,1,""]},"tensorflowonspark.reservation.Server":{await_reservations:[10,3,1,""],done:[10,2,1,""],reservations:[10,2,1,""],start:[10,3,1,""],stop:[10,3,1,""]},"tensorflowonspark.util":{find_in_path:[12,4,1,""],get_ip_address:[12,4,1,""]},tensorflowonspark:{TFCluster:[2,0,0,"-"],TFManager:[3,0,0,"-"],TFNode:[4,0,0,"-"],TFSparkNode:[5,0,0,"-"],dfutil:[6,0,0,"-"],gpu_info:[7,0,0,"-"],marker:[8,0,0,"-"],pipeline:[9,0,0,"-"],reservation:[10,0,0,"-"],reservation_client:[11,0,0,"-"],util:[12,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","data","Python data"],"6":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:data","6":"py:staticmethod"},terms:{"abstract":10,"boolean":[2,4,5,10],"class":[2,3,4,5,8,9,10],"default":[2,5],"enum":2,"export":[4,9],"function":[2,4,5,6,9,10],"new":[2,3,5],"return":[2,3,4,5,6,7,9,10],"static":9,"true":[4,5,6,10],And:[4,9],For:[2,4,5,9],The:[4,9],There:[2,9],These:[2,5],USE:2,Use:4,about:10,absolut:4,absolute_path:5,access:[3,5],accord:[7,9],accordingli:4,accuraci:[2,4],action:2,actual:9,add:10,addit:9,address:[2,3,5,10,11,12],after:9,all:[2,5,10],alloc:[4,7],allow:9,also:[3,5,9],ani:[2,4],api:[2,5,6,9],app:9,applic:[2,4,9],architectur:9,arg:[2,3,4,5,6,7,9,10],argpars:[2,5,9],argument:[4,5,6,9],argv:[2,5,9],arrai:[4,6,9],associ:4,attempt:6,authkei:3,author:3,automat:6,avail:7,avoid:[4,9],await:10,await_reserv:10,back:9,background:[5,10],base:[2,3,4,5,8,9,10],basemanag:3,batch:[4,9],batch_result:4,batch_siz:[4,9],becaus:4,been:10,binari:6,binary_featur:6,binarytyp:6,block:10,both:6,bytearrai:6,byteslist:6,bytestr:6,cach:[3,9],call:4,caller:[4,6],can:[4,5],capabl:2,check:4,checkpoint:9,chief:[2,5],client:10,close:[2,10],cluster:[2,4,5,9,10],cluster_id:[2,5],cluster_info:[2,5,10],cluster_meta:[2,5],cluster_s:[2,9],cluster_spec:[4,5],clusterspec:[4,5],code:4,coerc:6,collect:6,column:[4,6,9],comma:[7,9],command:[2,5,9],commun:[3,4],compat:4,complet:[9,10],comput:2,condit:[2,4],conduct:9,connect:[3,10],constructor:[4,9],contain:[4,5,10],content:0,control:2,conveni:[4,5],convert:[4,6,9],core:9,correct:4,could:7,count:10,creat:[3,4],creation:4,ctx:[4,5],current:[2,4,5,10],custom:9,data:[2,4,5,8,9],datafe:[2,4,5],datafram:[4,6,9],datardd:[2,5],dataset:2,datatyp:6,defaultf:[2,5],delimit:[7,9],deprec:4,design:2,desir:[4,7],destin:10,detail:2,determin:4,dev:9,dfutil:[0,1,9],dictionari:[2,4,5,9],dictonari:10,differ:9,directli:[5,9],directori:[2,5,9],disambigu:6,disk:[4,6,9],distribut:[2,3,4,9],doc:9,doe:4,done:10,driver:[2,9,11],driver_ps_nod:[2,9],dtype:6,due:9,dure:[2,8,9,10],each:[2,9],earli:4,either:3,encapsul:5,end:[2,4,5,8],endpartit:8,enqueu:9,entir:2,environ:9,epoch:[2,9],equival:[4,6],esp:2,especi:9,estim:9,etc:[2,4,5],event:[2,5],exampl:6,except:[7,9],excess:4,execut:[2,9],executor:[2,4,5,9],exist:3,expect:[4,5,6,9,10],explicit:4,export_dir:[4,5,9],export_fn:9,export_saved_model:[4,5],extend:9,extra:4,fairli:6,fals:[2,4,5,10],featur:6,feed:[2,4,5,8,9],fewer:4,file:[2,5,6,12],filesystem:[2,4,5],find:12,find_in_path:12,fit:9,fix:[2,5],flat:6,floatlist:6,follow:4,form:[4,5],found:7,free:7,from:[3,4,5,6,9],fromtfexampl:6,fulfil:10,full:2,further:4,gener:[2,4,9],get:[2,4,7,10,12],get_data_fe:5,get_gpu:7,get_ip_address:12,get_meta_graph_def:9,get_reserv:10,getbatchs:9,getclusters:9,getdriverpsnod:9,getepoch:9,getexportdir:9,getinputmap:9,getinputmod:9,getmodeldir:9,getnump:9,getoutputmap:9,getprotocol:9,getread:9,getsignaturedefkei:9,getstep:9,gettagset:9,gettensorboard:9,gettfrecorddir:9,given:[5,6,12],gpu:[2,4,7],gpu_info:[0,1],graph:[4,9],grpc:9,has:9,hasbatchs:9,hasclusters:9,hasepoch:9,hasexportdir:9,hasinputmap:9,hasinputmod:9,hasmodeldir:9,hasnump:9,hasoutputmap:9,hasprotocol:9,hasread:9,hassignaturedefkei:9,hasstep:9,hastagset:9,hastensorboard:9,hastfrecorddir:9,have:[4,10],hdf:[2,4,5],hdfs_path:[4,5],help:[2,4],helper:4,high:[2,5],hint:6,host:[3,5,10,11,12],howev:9,html:9,http:9,identifi:[4,5,9],ids:7,ignor:4,immedi:9,implement:2,incom:4,independ:9,index:0,indic:[2,3,4,5,10],infer:[2,4,5,6],infer_schema:6,inferenc:[2,4,9],inform:5,initi:9,input:[2,4,5,6,9],input_dir:6,input_map:[4,5,9],input_mod:[2,9],input_tensor_alia:4,input_tensor_nam:4,inputmod:[2,4,9],instanc:[3,4,5,9],instanti:4,instead:[2,4],int64list:6,integ:5,intend:[4,5],interact:5,intern:2,internal_us:[2,3,4,5],interpret:2,invalid:[2,5],invoc:9,invok:[2,4],isloadeddf:6,item:[4,9],iter:[6,9],itself:4,iverb:4,job:[2,5],job_nam:5,just:9,kei:[3,4],launch:[2,9],lazili:2,length:[4,9,10],level:[2,5],librari:9,like:9,limit:[6,9],line:[2,5,9],list:[6,7,9,10],listen:[2,10],load:[6,9],loadtfrecord:[6,9],local:[2,3,5,9],locat:[6,9],log:[2,5,11],log_dir:[2,5],logic:5,low:5,mai:4,main:[2,5,9],manag:[2,3,4,5,10],map:[4,9],map_fun:[2,4],mappartit:[5,6],mark:8,marker:[0,1,2],match:[2,4],max_retri:7,maxim:2,maximum:[7,9],mechan:4,memori:[3,9],merg:9,merge_args_param:9,messag:[2,10],messagesocket:10,meta:10,meta_graph_def:9,metadata:[2,4,5,10],metagraph:9,method:[4,5,6,9,10],method_nam:4,mgr:[4,5],mirror:[5,6],mix:9,mode:[2,3,9],model:9,model_dir:9,modul:[0,1],more:[2,5],most:6,msg:10,multi:3,multipl:4,multiprocess:[2,3,5],must:[2,9],name:[4,5,9],namenod:[2,5],namespac:9,need:[2,5,6,9],network:9,next_batch:4,node:[2,4,5,9,10],noderdd:[2,5],none:[2,3,4,5,9,10],note:[4,6,11],now:5,num_epoch:2,num_executor:[2,5],num_gpu:[4,5,7],num_p:[2,9],num_tensor:9,number:[2,4,7,9,10],nvidia:7,object:[2,4,5,8,9,10],often:4,onc:9,one:[3,4,5,6],onli:[2,3,4,9],oper:[2,4],option:9,org:9,origin:9,other:2,otherwis:[3,9],output:[2,4,5,9],output_dir:6,output_map:9,output_tensor_alia:4,output_tensor_nam:4,overhead:4,packag:0,page:0,parallel:[2,5,9],param:9,parent:9,partit:[2,4,5,6,8,9],pass:[2,5,9],path:[2,4,5,6,9,12],per:[2,4,5,9],perspect:4,phase:2,pickl:[3,10],pid:5,pipelin:[0,1,4,6],placehold:9,point:10,poll:10,port:[2,3,5,10,11],ppid:5,prefix:[4,10],previous:4,primarili:[4,6],prior:6,process:[2,3,4,5,9],produc:[6,9],protocol:9,provid:[2,4,5,9],push:[2,4],pyspark:9,python:[3,4,5,9],qname:[2,4,5],qname_in:[4,5],qname_out:[4,5],queue:[2,3,5,8],queue_runn:9,queuerunn:9,rais:[7,9],rang:[2,5],rank:5,rdd:[2,4,5,6,8],rdma:[4,5,9],reach:4,read:[2,9],reader:9,receiv:[2,10],recommend:2,reconnect:5,record:9,refer:5,referenc:3,regist:10,rel:4,remain:10,remot:3,repeat:2,replac:[4,9],report:11,repres:[2,6],represent:[4,5],request:[7,10],request_stop:10,requir:[6,10],reserv:[0,1,2,5,11],reservation_cli:[0,1],resourc:2,respons:[2,4],result:[2,4,5],retri:7,retriev:[4,9],role:4,row:[2,4,6],run:[2,5,9],safe:10,same:3,save:[2,4,5,6,9],saveastfrecord:6,saved_model:[4,9],saved_model_cli:9,saved_model_dir:9,schema:6,scheme:4,search:0,see:[2,5],send:[2,10],sent:4,separ:[4,9],serial:[3,6],serv:9,server:[2,4,5,10,11],server_addr:10,sess:[4,5],session:[4,9],set:[2,9],setbatchs:9,setclusters:9,setdriverpsnod:9,setepoch:9,setexportdir:9,setinputmap:9,setinputmod:9,setmodeldir:9,setnump:9,setoutputmap:9,setprotocol:9,setread:9,setsignaturedefkei:9,setstep:9,settagset:9,settensorboard:9,settfrecorddir:9,share:5,should:[2,4,5,10],should_stop:4,shutdown:[2,5,10,11],signal:[4,11],signatur:[4,5,9],signature_def_kei:[4,9],signature_def_map:4,simpl:[10,11,12],simplenamespac:9,simpli:5,simplifi:4,sinc:[2,4,5,9],singl:9,single_node_env:9,singleton:5,size:4,smi:7,sock:10,socket:10,sourc:[2,3,4,5,6,7,8,9,10,12],spark:[2,4,5,6,9,11],sparkcontext:[2,6],sparkml:9,spawn:[2,5,9],special:8,specif:[4,9],specifi:[4,9],ssc:2,standard:5,start:[2,3,4,10],start_cluster_serv:[4,5],startup:[2,10],state:[2,5],step:[2,4,9],still:4,stop:[2,4,5,10],store:[9,10],stream:2,streamingcontext:[2,11],string:[2,3,4,5,6,7,9,12],stringtyp:6,struct:[],structfield:6,structtyp:6,structur:6,style:9,submodul:0,subsequ:[2,9],suppli:[2,3],support:9,tag:9,tag_set:[4,5,9],task:[2,9],task_index:5,tcp:10,temporari:9,temporarili:9,tensor1:4,tensor2:4,tensor:[4,9],tensorboard:[2,5,9],tensorboard_url:2,tensorflow:[2,4,5,6,9],tensorn:4,termin:[2,4],tf_arg:[2,5,9],tf_argv:[],tfcluster:[0,1,4,5,10],tfestim:9,tfmanag:[0,1,4,5],tfmodel:9,tfnode:[0,1,2,5],tfnodecontext:[4,5],tfparam:9,tfreader:9,tfrecord:[6,9],tfrecord_dir:9,tfsparknod:[0,1],tftypeconvert:9,than:[4,5],thei:2,therefor:2,thi:[2,4,5,6,7,9,10],thread:[9,10],three:2,tie:2,time:[2,7],todict:9,told:4,totfexampl:6,train:[2,4,5,6,9],train_fn:9,train_mod:[4,5],transform:9,tupl:[3,4,10],type:[6,9],typeconvert:9,undefin:9,unfulfil:10,union:2,uniqu:[2,3,5],unrel:4,until:[7,10],url:2,use:[2,11],used:[2,4,5,6],useful:9,user:[2,5,9],uses:9,using:[4,9],util:[0,1,2,6,9,11],valid:2,valu:[4,9],via:[2,5],when:[2,9],where:5,which:[2,3,6,9],within:[4,9],won:2,work:[2,5],worker:[2,3,4,5,9],worker_num:5,working_dir:[2,5],wrap:[4,5],yarn:5,yield:9,yield_batch:9,you:[2,4],your:[2,4]},titles:["Welcome to TensorFlowOnSpark\u2019s documentation!","tensorflowonspark package","tensorflowonspark.TFCluster module","tensorflowonspark.TFManager module","tensorflowonspark.TFNode module","tensorflowonspark.TFSparkNode module","tensorflowonspark.dfutil module","tensorflowonspark.gpu_info module","tensorflowonspark.marker module","tensorflowonspark.pipeline module","tensorflowonspark.reservation module","tensorflowonspark.reservation_client module","tensorflowonspark.util module"],titleterms:{dfutil:6,document:0,gpu_info:7,indic:0,marker:8,modul:[2,3,4,5,6,7,8,9,10,11,12],packag:1,pipelin:9,reserv:10,reservation_cli:11,submodul:1,tabl:0,tensorflowonspark:[0,1,2,3,4,5,6,7,8,9,10,11,12],tfcluster:2,tfmanag:3,tfnode:4,tfsparknod:5,util:12,welcom:0}})