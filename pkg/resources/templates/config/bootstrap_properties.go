package config

var BootstrapPropertiesTemplate = `#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

# Java command to use when running NiFi
java=java

# Username to use when running NiFi. This value will be ignored on Windows.
run.as=

# Configure where NiFi's lib and conf directories live
lib.dir=./lib
conf.dir=./conf

# How long to wait after telling NiFi to shutdown before explicitly killing the Process
graceful.shutdown.seconds=20

# Disable JSR 199 so that we can use JSP's without running a JDK
java.arg.1=-Dorg.apache.jasper.compiler.disablejsr199=true

# JVM memory settings
java.arg.2=-Xms{{.JvmMemory}}
java.arg.3=-Xmx{{.JvmMemory}}

# Enable Remote Debugging
#java.arg.debug=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=8000

java.arg.4=-Djava.net.preferIPv4Stack=true

# allowRestrictedHeaders is required for Cluster/Node communications to work properly
java.arg.5=-Dsun.net.http.allowRestrictedHeaders=true
java.arg.6=-Djava.protocol.handler.pkgs=sun.net.www.protocol

# The G1GC is still considered experimental but has proven to be very advantageous in providing great
# performance without significant "stop-the-world" delays.
#java.arg.13=-XX:+UseG1GC

#Set headless mode by default
java.arg.14=-Djava.awt.headless=true

# Master key in hexadecimal format for encrypted sensitive configuration values
nifi.bootstrap.sensitive.key=

# Sets the provider of SecureRandom to /dev/urandom to prevent blocking on VMs
java.arg.15=-Djava.security.egd=file:/dev/urandom

###
# Notification Services for notifying interested parties when NiFi is stopped, started, dies
###

# XML File that contains the definitions of the notification services
notification.services.file=./conf/bootstrap-notification-services.xml

# In the case that we are unable to send a notification for an event, how many times should we retry?
notification.max.attempts=5

# Comma-separated list of identifiers that are present in the notification.services.file; which services should be used to notify when NiFi is started?
#nifi.start.notification.services=email-notification

# Comma-separated list of identifiers that are present in the notification.services.file; which services should be used to notify when NiFi is stopped?
#nifi.stop.notification.services=email-notification

# Comma-separated list of identifiers that are present in the notification.services.file; which services should be used to notify when NiFi dies?
#nifi.dead.notification.services=email-notification
`
